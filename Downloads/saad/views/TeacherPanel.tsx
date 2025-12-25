import React, { useState, useEffect } from 'react';
import { Key, Trash2, MessageSquare } from 'lucide-react';
import { Card, Button, Input } from '../components/UI';
import { Messages } from '../components/Messages';
import { api } from '../services/api';
import { Teacher } from '../types';

interface TeacherPanelProps {
  teacher: Teacher;
  onLogout: () => void;
}

const TeacherPanel: React.FC<TeacherPanelProps> = ({ teacher, onLogout }) => {
  const [currentTeacher, setCurrentTeacher] = useState<Teacher>(teacher);
  const [attendance, setAttendance] = useState<Record<string, { status: 'present' | 'absent' | null, notes: string }>>({});
  const [showManageStudents, setShowManageStudents] = useState(false);
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', id: '' });
  const [newPwd, setNewPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');

  useEffect(() => {
    const load = async () => {
       const teachers = await api.getTeachers();
       const updated = teachers[teacher.code];
       if (updated) {
          setCurrentTeacher(updated);
          const init: Record<string, { status: 'present' | 'absent' | null, notes: string }> = {}; 
          updated.students?.forEach(s => init[s.name] = { status: null, notes: '' });
          setAttendance(init);
       }
    }
    load();
  }, [teacher.code]);

  const handleStatus = (name: string, status: 'present' | 'absent') => {
    setAttendance(p => ({ 
      ...p, 
      [name]: { ...p[name], status: p[name]?.status === status ? null : status } 
    }));
  };
  
  const handleNote = (name: string, notes: string) => {
    setAttendance(p => ({ ...p, [name]: { ...p[name], notes } }));
  };
  
  const saveAttendance = async () => {
    const records = Object.entries(attendance)
      .filter(([_, d]: [string, { status: 'present' | 'absent' | null, notes: string }]) => d.status)
      .map(([n, d]: [string, { status: 'present' | 'absent' | null, notes: string }]) => ({
        id: `${Date.now()}-${Math.random()}`, 
        teacherCode: currentTeacher.code, 
        studentName: n, 
        status: d.status!, 
        notes: d.notes, 
        date: new Date().toISOString().split('T')[0]
      }));
    if (!records.length) return alert('حدد الحالة');
    setLoading(true);
    await api.saveAttendanceBatch(records); 
    setLoading(false);
    alert('تم الحفظ'); onLogout();
  };

  const handleAddStudent = async () => {
    if(!newStudent.name||!newStudent.id) return alert('بيانات ناقصة');
    const t = { ...currentTeacher }; if(!t.students) t.students=[];
    if(t.students.some(s=>s.id===newStudent.id)) return alert('موجود');
    t.students.push(newStudent); 
    setLoading(true);
    await api.saveTeacher(t); 
    setCurrentTeacher(t); 
    setLoading(false);
    setNewStudent({name:'',id:''}); alert('تم');
  };

  const handleChangePwd = async () => {
    if(newPwd.length<4) return alert('قصيرة');
    const t={...currentTeacher, password:newPwd}; 
    setLoading(true);
    await api.saveTeacher(t); 
    setCurrentTeacher(t); 
    setLoading(false);
    setNewPwd(''); alert('تم'); setShowChangePwd(false);
  };

  return (
    <div className="pb-24">
      <Card className="mb-6 sticky top-4 z-40 border-green-100 flex justify-between items-center">
        <div><h2 className="text-2xl font-bold text-secondary">لوحة التحكم</h2><div className="text-sm">{currentTeacher.name}</div></div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={()=>setShowChangePwd(true)} className="p-2"><Key className="w-4 h-4"/></Button>
          <Button variant="accent" onClick={()=>setShowManageStudents(true)} className="px-3 text-sm">إدارة الطلاب</Button>
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 border-b">
        <button
          onClick={() => setActiveTab('attendance')}
          className={`px-4 py-2 font-bold border-b-2 transition ${
            activeTab === 'attendance'
              ? 'border-secondary text-secondary'
              : 'border-transparent text-gray-600'
          }`}
        >
          الحضور
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`px-4 py-2 font-bold border-b-2 transition flex items-center gap-2 ${
            activeTab === 'messages'
              ? 'border-secondary text-secondary'
              : 'border-transparent text-gray-600'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          الرسائل
        </button>
      </div>

      {/* Content */}
      {activeTab === 'attendance' ? (
        <>
          {loading && <div className="text-center py-2 text-primary">جاري المعالجة...</div>}
          <div className="space-y-4">
        {currentTeacher.students?.map(s => {
            const d = attendance[s.name] || { status: null, notes: '' };
            return (
              <div key={s.id} className="bg-white rounded-xl p-4 shadow-sm border flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 w-full text-right"><div className="font-bold text-lg">{s.name}</div><input type="text" placeholder="ملاحظات..." className="w-full mt-2 p-2 border rounded bg-gray-50 text-right" value={d.notes} onChange={e=>handleNote(s.name, e.target.value)} /></div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button onClick={()=>handleStatus(s.name, 'absent')} className={`flex-1 px-4 py-3 rounded font-bold border transition-colors ${d.status==='absent'?'bg-red-500 text-white':'bg-red-50 text-red-500'}`}>غائب</button>
                  <button onClick={()=>handleStatus(s.name, 'present')} className={`flex-1 px-4 py-3 rounded font-bold border transition-colors ${d.status==='present'?'bg-green-500 text-white':'bg-green-50 text-green-500'}`}>حاضر</button>
                </div>
              </div>
            );
        })}
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex gap-4 z-50">
            <Button variant="danger" onClick={onLogout} className="flex-1">خروج</Button>
            <Button onClick={saveAttendance} className="flex-[2]" disabled={loading}>{loading?'...':'حفظ'}</Button>
          </div>
        </>
      ) : (
        <Messages
          userId={teacher.code}
          userName={currentTeacher.name}
          userRole="teacher"
          recipients={[{ id: 'admin', name: 'الإدارة', role: 'admin' }]}
        />
      )}
      {showManageStudents && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card className="w-full max-w-lg" title="إدارة الطلاب">
            <div className="bg-gray-50 p-4 rounded mb-4">
                <Input label="الاسم" value={newStudent.name} onChange={e=>setNewStudent({...newStudent, name:e.target.value})} />
                <Input label="الهوية" value={newStudent.id} onChange={e=>setNewStudent({...newStudent, id:e.target.value})} />
                <Button fullWidth onClick={handleAddStudent} variant="accent" disabled={loading}>إضافة</Button>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2">
               {currentTeacher.students?.map(s=>(<div key={s.id} className="flex justify-between p-2 border bg-white"><span>{s.name}</span><button onClick={async ()=>{if(confirm('حذف؟')){const t={...currentTeacher};t.students=t.students.filter(x=>x.id!==s.id);setLoading(true);await api.saveTeacher(t);setCurrentTeacher(t);setLoading(false);}}} className="text-red-500"><Trash2 className="w-4 h-4"/></button></div>))}
            </div>
            <Button fullWidth variant="secondary" onClick={()=>setShowManageStudents(false)} className="mt-4">إغلاق</Button>
          </Card>
        </div>
      )}
      {showChangePwd && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card title="تغيير كلمة السر">
            <Input label="الجديدة" type="password" value={newPwd} onChange={e=>setNewPwd(e.target.value)} />
            <div className="flex gap-2 mt-4"><Button fullWidth variant="secondary" onClick={()=>setShowChangePwd(false)}>إلغاء</Button><Button fullWidth onClick={handleChangePwd} disabled={loading}>حفظ</Button></div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TeacherPanel;