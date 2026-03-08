export default function DashboardPage() {
  // هذه بيانات وهمية مؤقتة، سنقوم بربطها بقاعدة البيانات لاحقاً
  const projects = [
    { id: '1', name: 'Wedding Shoot - Sara & Ahmed', date: '2024-05-20', status: 'Completed', imageCount: 450 },
    { id: '2', name: 'Product Photography - Tech Co', date: '2024-05-18', status: 'Completed', imageCount: 120 },
    { id: '3', name: 'Birthday Party - Event', date: '2024-05-15', status: 'Processing', imageCount: 890 },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="mt-2 text-gray-600">مرحباً بك في N3MGrapher. إدارة مشاريعك بسهولة.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  {/* Icon Placeholder */}
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">إجمالي المشاريع</dt>
                    <dd className="text-lg font-medium text-gray-900">3</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">الصور التي تم فرزها</dt>
                    <dd className="text-lg font-medium text-gray-900">5,470</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">مساحة التخزين</dt>
                    <dd className="text-lg font-medium text-gray-900">2.1 GB / 10 GB</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">مشاريعي الأخيرة</h3>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              + إنشاء مشروع جديد
            </button>
          </div>
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.id}>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">{project.name}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status === 'Completed' ? 'مكتمل' : 'قيد المعالجة'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {project.imageCount} صورة
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        {project.date}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
