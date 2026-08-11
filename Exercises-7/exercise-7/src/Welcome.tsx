interface WelcomeProps {
    username: string
    isPremium: boolean
}

function Welcome({ username, isPremium }: WelcomeProps) {
    return (
        <div>
             <h1>Welcome back, {username}!</h1>
            {isPremium && <span className="badge">Premium Member</span>}
            
          </div>
    )
}


export default Welcome