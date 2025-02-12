# Preparations for React Training

> During the workshop, we will complete exercises. To participate, you need to install some necessary tools (if you haven't already).
>
> You can use this guide to check, if your setup works _before_ the workshop. This ensures you have time to resolve any issues, especially if your computer has security restrictions or you lack full administrative access.
>
## Requirements

**For Your Laptop/PC**

Ensure the following are installed on your laptop/PC:

- **Git** (for cloning the workspace)
- **[Node.js](https://nodejs.org/en/download/)** LTS version, preferably at least **20.17.x**, which I used for testing. Other versions might work as well.
- **A Web Browser**
- **An IDE or a Text Editor.** If you already have a preferred editor, use it during training to avoid learning a new tool. Otherwise, the following tools are recommended:
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [WebStorm](https://www.jetbrains.com/webstorm/download/) (Evaluation version is sufficient)
  - [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) (Ultimate Edition; evaluation version is also sufficient)

**Optional: Browser Extensions for React**

- For working with React, installing the [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) is recommended. They are available for:
  - [Chrome/Edge](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [Firefox](https://addons.mozilla.org/en/firefox/addon/react-devtools/)
- These Developer Tools are **not required** for the workshop.

**During the Training**

- As updates may need to be installed before and during training, **ensure that your computer has internet access throughout the session**:
  - Ensure that installing npm packages and cloning Git repositories also work during the training.
  - Check that no proxy, VPN, firewall, or other settings prevent access to Git and npm.
  - If needed, you can find information on configuring a proxy for npm [here](http://wil.boayue.com/blog/2013/06/14/using-npm-behind-a-proxy/).
- **Please keep your camera on during the training!** Otherwise, it’s difficult for me to see if I am boring you or if you’re struggling to keep up.
  - You only need to turn on your microphone when you want to speak or ask a question (which you are welcome to do at any time!).
- **Wi-Fi is convenient, but a wired network connection is more stable for (long) streaming sessions.** If possible, use a cable connection instead of Wi-Fi (and disable Wi-Fi) for a smoother experience 😊.

# Installation and Preparation of the Workspace for Training

To ensure everything runs smoothly during the workshop, **please complete the following steps beforehand**, even if updates are made during the session (which is why Git and npm should also work _during_ the workshop).

## Step 1: Clone the Repository and Install Packages

1. Clone the repository:

   ```bash
   git clone https://github.com/nilshartmann/react19-workshop
   ```


2. Install the required npm packages:

   ```bash
   cd ./backend
   npm install

   cd ./workspace
   npm install
   npm run build
   ```

* You should see the message `built in XXXms` on the console

## Step 2: Verify that the REST Backend Works

1. Start the backend from the **backend** directory:

   ```bash
   cd ./backend
   npm start
   ```

   **Note!** The backend runs on **Port 7100**, so this port must be available.

2. Test the backend:

   - Open this URL in a browser (or use `curl`, `wget`, or `httpie`): [http://localhost:7100/posts](http://localhost:7100/posts)
   - You should see JSON data returned.

## Step 3: Verify that the Blog Example Frontend Works

- During the workshop we will work inside the directory `react19-workspace/workspace`. Please execute the following
  steps in that folder.

1. Run the "Hello-World"-Test:
   ```bash
   cd ./workspace
   npm run hello-world-test
   ```
   
* You should see output like this:
```
Test Files  1 passed (1)
      Tests  1 passed (1)
```

2. Start the frontend: 

   ```bash
   cd ./workspace
   npm start
   ```

**Note!** The frontend runs on **Port 3000**, so this port must be available.

3. Once the frontend starts, test the application by opening [http://localhost:3000](http://localhost:3000) in your browser. You should see a "Hello World" message.

# **That's it! 😊**

- If you have any questions or run into issues, feel free to reach out to me.
