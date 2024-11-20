class Config {
    // Declaring a static property
    static appName = "My Application";
    static version = "1.0";
    static getAppInfo() {
        return `${this.appName} - Version ${this.version}`;
    }
}
// Accessing static properties directly from the class
console.log(Config.appName);         
console.log(Config.getAppInfo());    