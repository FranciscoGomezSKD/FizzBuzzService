
class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorersInNode);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorersInNode.length);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.githubUsername);
        console.log(usernamesInNode);
        return  usernamesInNode;
    }

    static filterByStack(explorers, stack){
        const explorersByStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersByStack;
    }
}


module.exports = ExplorerService;

