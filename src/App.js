import MyFooter from "./components/Footer";
import Header from "./components/Header";
import "./index.css"
function App(){
    const students = [
        {id: 1, name: "Binish", marks: 89},
        {id: 2, name: "Kulsoom", marks: 50},
        {id: 3, name: "Zulaikha", marks: 70},
        {id: 4, name: "Zunaira", marks: 75},
    ]
    const topStudents = students.filter(item => item.marks > 70);
    console.log("🚀 ~ App ~ topStudents:", topStudents)
    return (
        <div>
            <Header />
            <h6>no if, for, declaration, initialization, updation</h6>
            {topStudents.map((item) => (
             <div>
                    <h1>{item.id} - {item.name}</h1>
                    <h4>{item.marks}</h4>
                </div>   
            ))}
            <MyFooter />
        </div>
    );
}
export default App