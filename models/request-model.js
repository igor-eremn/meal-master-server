const dietAnalysisService = require('../services/dietAnalysisService');
const mealSuggestionService = require('../services/mealSuggestionService');

const handleRequest = (request, body) => {
    let prompt;
    const { currentWeight, targetWeight, timeLine } = body;

    switch(request) {
        case 'analyze-goal-diet':
            if(currentWeight > targetWeight){
                return 'Weight Loss';
            }else if(currentWeight < targetWeight){
                return 'Weight Gain';
            }
            return 'Maintain';
        
        case 'analyze-diff-diet':
            prompt = createDietPrompt('diff', currentWeight, targetWeight, timeLine);
            return dietAnalysisService.analyzeDiet(prompt, body);

        case 'analyze-cal-diet':
            prompt = createDietPrompt('cal', currentWeight, targetWeight, timeLine);
            return dietAnalysisService.analyzeDiet(prompt, body);

        default:
            throw new Error("Invalid request");
    }
};

const createDietPrompt = (check, currentWeight, targetWeight, timeLine) => {
    let goalPrompt = '';
    switch(goal) {
        case 'diff':

            goalPrompt = `lose weight from ${currentWeight}kg to ${targetWeight}kg`;
            break;
        case 'cal':
            goalPrompt = `gain weight from ${currentWeight}kg to ${targetWeight}kg`;
            break;
        default:
            throw new Error("Invalid call");
    }
    return goalPrompt;
};

module.exports = { handleRequest };
