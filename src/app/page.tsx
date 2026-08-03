export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 w-full max-w-6xl mx-auto">
      {/* Header Halaman */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Selamat datang kembali! Ini adalah ringkasan sistem manajemen siswa.
        </p>
      </div>

      {/* Area Card (Bisa untuk Statistik Nanti) */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="font-semibold text-lg">Total Siswa</h3>
          <p className="text-3xl font-bold mt-2">--</p>
        </div>
        <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="font-semibold text-lg">Total Kelas</h3>
          <p className="text-3xl font-bold mt-2">--</p>
        </div>
        <div className="p-6 border rounded-xl bg-destructive/10 border-destructive/20 text-destructive shadow-sm">
          <h3 className="font-semibold text-lg">Pelanggaran Hari Ini</h3>
          <p className="text-3xl font-bold mt-2">--</p>
        </div>
      </div>

      {/* Identitas Pengerjaan Tugas */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-dashed border-muted-foreground/30 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Sistem Manajemen Siswa - Roiyan Felix | Kelas: XIC PPLG
        </p>
      </div>
    </div>
  );
}
