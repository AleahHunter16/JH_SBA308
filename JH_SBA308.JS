// When you want to commit:
// git add .
// git commit -m "whatever messgae you want"
// git push origin main


// The provided course information.
const CourseInfo = {
    id: 1116,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 11161996,
    name: "Fundamentals of JavaScript",
    course_id: 609,
    group_weight: 15,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2024-02-11",
            points_possible: 80
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2024-02-27",
            points_possible: 100
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "2024-06-09",
            points_possible: 750
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 531,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-02-15",
            score: 67
        }
    },
    {
        learner_id: 531,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-02-26",
            score: 92
        }
    },
    {
        learner_id: 531,
        assignment_id: 3,
        submission: {
            submitted_at: "2024-06-16",
            score: 609 // This score exceeds the points possible for assignment 3
        }
    },
    {
        learner_id: 225,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-02-24",
            score: 77
        }
    },
    {
        learner_id: 225,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-02-27",
            score: 98
        }
    }
];

function getLearnerData(course, ag, submissions) {
    const learnerScores = {};

    submissions.forEach(({ learner_id, assignment_id, submission }) => {
        if (!learnerScores[learner_id]) {
            learnerScores[learner_id] = {
                id: learner_id,
                totalScore: 0,
                totalPoints: 0,
                individualScores: {}
            };
        }

        const assignment = ag.assignments.find(a => a.id === assignment_id);
        if (assignment) {
            const pointsPossible = assignment.points_possible;
            let score = submission.score;

            // Check if the submission is late and deduct points if necessary
            if (new Date(submission.submitted_at) > new Date(assignment.due_at)) {
                score = Math.max(score - 10, 0); // Deduct 10 points but don't go below 0
            }

            // Update the total score and total points for average calculation
            learnerScores[learner_id].totalScore += Math.min(score, pointsPossible); // Use the minimum of score and points possible
            learnerScores[learner_id].totalPoints += pointsPossible;

            // Store individual assignment score
            learnerScores[learner_id].individualScores[assignment_id] = score / pointsPossible;
        }
    });

    // Prepare the result array with averages
    const result = Object.values(learnerScores).map(learner => {
        const average = learner.totalScore / learner.totalPoints;
        const individualResults = { avg: parseFloat(average.toFixed(3)) };

        // Add individual assignment scores
        for (const [assignmentId, score] of Object.entries(learner.individualScores)) {
            individualResults[assignmentId] = parseFloat(score.toFixed(3));
        }

        return {
            id: learner.id,
            ...individualResults
        };
    });

    return result;
}

// Get the learner data and log it to the console
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

