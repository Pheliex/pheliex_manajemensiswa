export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-10">
      <div className="border p-8 rounded-lg shadow-sm text-center bg-white">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Sistem Manajemen Siswa - Roiyan Felix
        </h1>

        {/* Detail Identitas */}
        <div className="flex flex-col gap-2 text-lg text-black">
          <p>
            <strong>Nama Lengkap:</strong> Roiyan Felix
          </p>
          <p>
            <strong>Kelas:</strong> XI C PPLG
          </p>
          <p>
            <strong>Judul Proyek:</strong> Sistem Manajemen Siswa
          </p>
        </div>
      </div>
    </div>
  );
}
