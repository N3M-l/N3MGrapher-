export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">ÅäÔÇÁ ÍÓÇÈ ÌÏíÏ</h2>
          <p className="mt-2 text-center text-sm text-gray-600">ÇäÖã Åáì N3MGrapher æÇÈÏÃ ÈİÑÒ ÕæÑß ÈĞßÇÁ.</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">ÇáÈÑíÏ ÇáÅáßÊÑæäí</label><input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" /></div>
            <div><label htmlFor="password" className="block text-sm font-medium text-gray-700">ßáãÉ ÇáãÑæÑ</label><input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="••••••••" /></div>
          </div>
          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700
# ÇáÎØæÉ 5: ßÊÇÈÉ ßæÏ áæÍÉ ÇáÊÍßã (Dashboard)
Set-Content -Path "app\dashboard\page.tsx" -Value @"
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">áæÍÉ ÇáÊÍßã</h1>
          <p className="mt-2 text-gray-600">ãÑÍÈÇğ Èß İí N3MGrapher. ÅÏÇÑÉ ãÔÇÑíÚß ÈÓåæáÉ.</p>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md p-6">
          <h2 className="text-lg font-medium text-gray-900">ÃåáÇğ Èß İí áæÍÉ ÇáÊÍßã!</h2>
          <p className="mt-2 text-sm text-gray-500">åĞå åí ÕİÍÊß ÇáÑÆíÓíÉ. ÓíÊã ÚÑÖ ÇáãÔÇÑíÚ æÇáÅÍÕÇÆíÇÊ åäÇ áÇÍŞÇğ.</p>
        </div>
      </div>
    </main>
  );
}
