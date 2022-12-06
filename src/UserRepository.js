class UserRepository {
    constructor(allUserData, hydrationData, sleepData) {
        this.userData = allUserData;
        this.hydrationData = hydrationData;
        this.sleepData = sleepData;
        this.selectedUser;
    }
    findUser(id) {
        return this.userData.find(user => {
            return  user.id === id});
        }
    randomizeUser() {
        let selectedUserIndex = Math.floor(Math.random() * (this.userData.length - 0 + 1)) + 0
        this.selectedUser = this.userData[selectedUserIndex]
        return selectedUserIndex;
    }
    averageSteps() {
        let averageStepGoal = this.userData.reduce((acc, user) => {
            return acc + user.dailyStepGoal
        }, 0);
        return Number((averageStepGoal/this.userData.length).toFixed(0))
    }
}

export default UserRepository;