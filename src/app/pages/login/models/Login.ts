export class Login {

    private _userName: string = 'ADMIN'
    private _userPassword: string = '!Admin34@'
    private _userEmail: string = 'admin@admin.com'

    public get Username() { return this._userName }
    public set Username(userName: string) { this._userName = userName }

    public get Password() { return this._userPassword }
    public set Password(userPassword: string) { this._userPassword = userPassword }

    public get Email() { return this._userEmail }
    public set Email(userEmail: string) { this._userEmail = userEmail }


    public Login(userName: string, userPassword: string) {
        const correctData = userName === this._userName && userPassword === this._userPassword

        try {
            if (!correctData) {
                throw new Error('Dados incorretos!')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    public SignIn(userName: string, userPassword: string) {
        const validData = userName !== null && userPassword !== null

        try {
            if (validData) {
                this.Username = userName
                this.Password = userPassword
            } else {
                throw new Error('Dados inválidos!')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

}