function Landing({ onRegister }) {
    return <section className="landing">
        <a href="" onClick={ event => {
            event.preventDefault()
            onRegister()
        }}>Register</a> or <a href="">Login</a>
    </section>
}