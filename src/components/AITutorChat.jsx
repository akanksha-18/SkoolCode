// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { sendChatMessage } from '../utils/apiService';

// function AITutorChat({ apiKey, selectedTutor, activeLesson }) {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const userMessage = {
//       role: 'user',
//       content: inputMessage
//     };

//     const updatedMessages = [...messages, userMessage];
//     setMessages(updatedMessages);
//     setInputMessage('');

//     try {
//       const aiResponse = await sendChatMessage({
//         apiKey,
//         messages: updatedMessages,
//         tutor: selectedTutor,
//         lesson: activeLesson
//       });

//       setMessages(prev => [...prev, {
//         role: 'assistant',
//         content: aiResponse
//       }]);
//     } catch (error) {
//       console.error('Chat error:', error);
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>🤖 AI Python Tutor</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="h-96 overflow-y-auto mb-4 border rounded p-4">
//           {messages.map((msg, index) => (
//             <div 
//               key={index}
//               className={`mb-2 p-2 rounded ${
//                 msg.role === 'user' 
//                   ? 'bg-blue-100 text-right' 
//                   : 'bg-green-100 text-left'
//               }`}
//             >
//               {msg.content}
//             </div>
//           ))}
//         </div>
//         <div className="flex space-x-2">
//           <Input 
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             placeholder="Ask your Python tutor a question..."
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//           />
//           <Button onClick={handleSendMessage}>Send</Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default AITutorChat;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { sendChatMessage } from '../utils/apiService';

function AITutorChat({ apiKey, selectedTutor, activeLesson }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputMessage
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');

    try {
      const aiResponse = await sendChatMessage({
        apiKey,
        messages: updatedMessages,
        tutor: selectedTutor,
        lesson: activeLesson
      });

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse
      }]);
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-4">
      <CardHeader>
        <CardTitle>🤖 AI Python Tutor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 overflow-y-auto mb-4 border rounded p-4">
          {messages.map((msg, index) => (
            <div 
              key={index}
              className={`mb-2 p-2 rounded max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto ${
                msg.role === 'user' 
                  ? 'bg-blue-100 text-right' 
                  : 'bg-green-100 text-left'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Input 
            className="flex-1 w-full sm:w-auto"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask your Python tutor a question..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button className="w-full sm:w-auto" onClick={handleSendMessage}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AITutorChat;
