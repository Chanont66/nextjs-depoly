import React from 'react';
import Link from 'next/link'; // ตรวจสอบว่า Next.js ถูกติดตั้งไว้แล้ว

export async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/attractions/${id}`);
    return res.json();
}

export default async function Page({ params }) {
    const id = params.id;
    const data = await getData(id);

    if (!data) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>ไม่พบข้อมูล</p>
            </div>
        );
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={data.coverimage} alt={data.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
            </div>
            <h1 style={{ fontSize: '24px', color: '#333' }}>{data.name}</h1>
            <p style={{ fontSize: '16px', color: '#555' }}>{data.detail}</p>
            {/* เพิ่มปุ่มที่นี่ */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/attractions">
                    <Link href="/attractions" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', fontSize: '16px' }}>
                        ไปยังหน้าแหล่งท่องเที่ยว
                    </Link>

                </Link>
            </div>
        </div>
    );
}
