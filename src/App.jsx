export default function App() {
  return (
    <>
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <span className="font-bold">MyBlog</span>
      <div className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
    </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-400">Card 1</div>
      <div className="bg-gray-400">Card 2</div>
      <div className="bg-black-400">Card 3</div>
      <div className="bg-blue-400">Card 4</div>
      <div className="bg-gray-400">Card 5</div>
      <div className="bg-black-400">Card 6</div>
    </div>

    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="rounded border p-4">A</div>
      <div className="rounded border p-4">B</div>
      <div className="rounded border p-4">C</div>
    </div>
    </>
  );
}