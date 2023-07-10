import { UserIcon } from "@heroicons/react/24/outline";
import "./App.css";

function App() {
    return (
        <div className="flex items-center p-4">
            <UserIcon className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-red-800">Hello world!</h1>
        </div>
    );
}

export default App;
