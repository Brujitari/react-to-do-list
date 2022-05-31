export default function TaskList({ tasks }) {
    console.log('all tasks: ', tasks)
    const drawList = (list) => {
        return (
            list.map((task, index) => {
            return (
            <li key={index} className="tasklist__task">{task}</li>
            )
        })
        )
    }

    return (
        <ul className="tasklist">
        {drawList(tasks)}
        </ul>
    )
}