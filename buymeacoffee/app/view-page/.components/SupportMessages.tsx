interface Message {
    name: string;
    message: string;
    amount: number;
  }
  
  interface SupportMessagesProps {
    messages: Message[];
  }
  
  export default function SupportMessages({ messages }: SupportMessagesProps) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Recent Supporters</h3>
        {messages.length === 0 ? (
          <p className="text-gray-500 italic">No supporters yet. Be the first! ☕</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-sm animate-fade-in"
            >
              <p className="font-semibold">{msg.name} bought {msg.amount} coffee(s)</p>
              <p className="text-gray-700 italic">"{msg.message}"</p>
            </div>
          ))
        )}
      </div>
    );
  }
  