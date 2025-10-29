function ChatInterface({ activeTab }) {
  try {
    const [messages, setMessages] = React.useState([
      { role: 'ai', content: 'Halo! Saya Binn AI. Ada yang bisa saya bantu hari ini?' }
    ]);
    const [input, setInput] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    React.useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
      if (!input.trim()) return;

      const userMessage = { role: 'user', content: input };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      try {
        const response = await invokeAIAgent(
          'Kamu adalah asisten AI yang ramah dan membantu. Jawab pertanyaan pengguna dengan jelas dan ringkas.',
          input
        );
        
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'ai', content: response }]);
      } catch (error) {
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'ai', content: 'Maaf, terjadi kesalahan. Silakan coba lagi.' }]);
      }
    };

    if (activeTab !== 'chat') {
      return (
        <div className="md:ml-64 p-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="icon-construction text-6xl text-gray-300 mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Fitur Segera Hadir</h2>
            <p className="text-gray-500">Fitur ini sedang dalam pengembangan</p>
          </div>
        </div>
      );
    }

    return (
      <div className="md:ml-64 flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-2xl px-6 py-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.role === 'ai' && (
                    <div className="flex space-x-2 mt-3 pt-3 border-t border-gray-100">
                      <button className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <div className="icon-refresh-cw text-sm"></div>
                        <span>Regenerate</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <div className="icon-edit text-sm"></div>
                        <span>Ubah Gaya</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <div className="icon-bookmark text-sm"></div>
                        <span>Simpan</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-6 py-4 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-gray-200 bg-white p-4">
          <div className="max-w-4xl mx-auto flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ketik pesan Anda..."
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <div className="icon-send text-xl"></div>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ChatInterface error:', error);
    return null;
  }
}