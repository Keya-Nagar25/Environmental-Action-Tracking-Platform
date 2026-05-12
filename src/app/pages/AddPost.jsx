import { useState } from 'react';
import { Camera, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function AddPost() {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePost = () => {
    if (!selectedImage) {
      toast.error("Please select an image first!");
      return;
    }
    toast.success("Post uploaded successfully! (Mock)");
    setCaption('');
    setSelectedImage(null);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 flex flex-col">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between">
        <button className="text-gray-500 text-lg">Cancel</button>
        <span className="font-bold text-lg">New Post</span>
        <button 
          onClick={handlePost} 
          className="text-blue-500 font-bold text-lg disabled:opacity-50"
          disabled={!selectedImage}
        >
          Share
        </button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
          {selectedImage ? (
            <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-8">
              <Camera size={48} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Tap to select a photo</p>
              <input 
                type="file" 
                accept="image/*" 
                className="absolute inset-0 opacity-0 cursor-pointer" 
                onChange={handleImageSelect}
              />
            </div>
          )}
          
          {selectedImage && (
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1"
            >
              ✕
            </button>
          )}
        </div>

        <div className="p-4 border-b border-gray-100 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500"></div>
          </div>
          <textarea 
            placeholder="Write a caption..." 
            className="flex-1 outline-none resize-none min-h-[100px]"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          {selectedImage && (
            <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
              <img src={selectedImage} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <div className="mt-2">
          <button className="w-full py-3 px-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50">
            <span className="text-gray-800">Tag People</span>
            <span className="text-gray-400 text-xl">›</span>
          </button>
          <button className="w-full py-3 px-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50">
            <span className="text-gray-800 flex items-center gap-2">
              Add Location <MapPin size={16} className="text-gray-400"/>
            </span>
            <span className="text-gray-400 text-xl">›</span>
          </button>
          <button className="w-full py-3 px-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50">
            <span className="text-gray-800">Advanced Settings</span>
            <span className="text-gray-400 text-xl">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
