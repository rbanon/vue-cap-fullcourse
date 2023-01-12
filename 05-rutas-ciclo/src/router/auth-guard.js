const isAuthenticatedGuard = (to,from, next) => {
    console.log({to,from,next})

}

export default isAuthenticatedGuard