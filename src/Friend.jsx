export default function Friend ({friend}){
    const {name, email} = friend;
    return (
        <div className="box">
            <h4>name: {name} </h4>
            <p>email: {email} </p>
        </div>
    )
}