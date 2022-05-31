export default function Input({handleKeyUp}) {
    return (
        <section className="input">
            <input
                className="input__element"
                onKeyUp={handleKeyUp}
            />
        </section>
    )
}