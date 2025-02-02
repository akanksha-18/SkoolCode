// import React, { useState } from 'react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
// import AITutorChat from '../components/AITutorChat';
// import LessonContent from '../components/LessonContent';

// function DashboardPage({ apiKey, selectedTutor }) {
//   const [activeLesson, setActiveLesson] = useState(null);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
//         <Tabs defaultValue="lessons">
//           <TabsList className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <TabsTrigger 
//               value="lessons" 
//               className="text-lg font-semibold p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               🧩 Lessons
//             </TabsTrigger>
//             <TabsTrigger 
//               value="chat" 
//               className="text-lg font-semibold p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               💬 AI Tutor Chat
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="lessons">
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
//               <LessonContent 
//                 onLessonSelect={setActiveLesson}
//                 activeLesson={activeLesson}
//               />
//             </div>
//           </TabsContent>

//           <TabsContent value="chat">
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
//               <AITutorChat 
//                 apiKey={apiKey} 
//                 selectedTutor={selectedTutor}
//                 activeLesson={activeLesson}
//               />
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AITutorChat from '../components/AITutorChat';
import LessonContent from '../components/LessonContent';

function DashboardPage({ apiKey, selectedTutor }) {
  const [activeLesson, setActiveLesson] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 max-w-7xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-2">
              Python Learning Dashboard
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Continue your learning journey with {selectedTutor || 'your AI tutor'}
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <Tabs defaultValue="lessons" className="w-full">
              {/* Tab Navigation */}
              <TabsList className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6 w-full">
                <TabsTrigger
                  value="lessons"
                  className="flex items-center justify-center text-base sm:text-lg font-semibold p-3 sm:p-4 rounded-lg
                           transition-all duration-300 hover:bg-purple-50 data-[state=active]:bg-purple-100
                           data-[state=active]:text-purple-800 focus:outline-none focus:ring-2 
                           focus:ring-purple-500 focus:ring-opacity-50"
                >
                  <span className="mr-2">🧩</span>
                  <span className="hidden sm:inline">Lessons</span>
                  <span className="sm:hidden">Learn</span>
                </TabsTrigger>
                <TabsTrigger
                  value="chat"
                  className="flex items-center justify-center text-base sm:text-lg font-semibold p-3 sm:p-4 rounded-lg
                           transition-all duration-300 hover:bg-purple-50 data-[state=active]:bg-purple-100
                           data-[state=active]:text-purple-800 focus:outline-none focus:ring-2 
                           focus:ring-purple-500 focus:ring-opacity-50"
                >
                  <span className="mr-2">💬</span>
                  <span className="hidden sm:inline">AI Tutor Chat</span>
                  <span className="sm:hidden">Chat</span>
                </TabsTrigger>
              </TabsList>

              {/* Lessons Tab Content */}
              <TabsContent 
                value="lessons" 
                className="mt-2 sm:mt-4 focus:outline-none"
              >
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                  <LessonContent
                    onLessonSelect={setActiveLesson}
                    activeLesson={activeLesson}
                  />
                </div>
              </TabsContent>

              {/* Chat Tab Content */}
              <TabsContent 
                value="chat" 
                className="mt-2 sm:mt-4 focus:outline-none"
              >
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm min-h-[500px] sm:min-h-[600px]">
                  <AITutorChat
                    apiKey={apiKey}
                    selectedTutor={selectedTutor}
                    activeLesson={activeLesson}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Responsive Footer */}
        <div className="mt-4 sm:mt-6 text-center text-sm text-gray-600">
          <p className="hidden sm:block">
            Need help? Click the chat tab to ask your AI tutor any questions.
          </p>
          <p className="sm:hidden">
            Need help? Switch to chat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;