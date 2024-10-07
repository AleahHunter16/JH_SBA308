// When you want to commit:
// git add .
// git commit -m "whatever messgae you want"
// git push origin main


// The provided course information.
const CourseInfo: {
    id: 1116;
    name: "Introduction to JavaScript";
}

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
            due_at: "2024-11-16",
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
            submitted_at: "2024-11-16",
            score: 609
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
function getLearnerData(course, avg, submissions) {
    const result = [
        {
            id: 531,
            avg: 0.985,
            1: 0.94,
            2: 1.0
        },
        {
            id: 225,
            avg: 0.82,
            1: 0.78,
            2: 0.833
        }
    ];

    return result;
}

function getLearnerData(course, avg, submissions) {
    const learnerScores = {};

    // Initialize learnerScores with learner IDs
    submissions.forEach(({ learner_id, assignment_id, submission }) => {
        if (!learnerScores[learner_id]) {
            learnerScores[learner_id] = {
                id: 531,
                assignment_id: 1,
                totalScore: 67,
                totalPoints: 67,
                individualScores: {}
            };
        }

        // Get the assignment data for the current submission
        const assignment = ag.assignments.find(a => a.id === assignment_id);
        if (assignment) {
            const pointsPossible = assignment.points_possible;
            const score = submission.score;

            // Update the total score and total points for average calculation
            learnerScores[learner_id].totalScore += score;
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


};
}

// Get the assignment data for the current submission
const assignment = ag.assignments.find(a => a.id === assignment_id);
if (assignment) {
    const pointsPossible = assignment.points_possible;
    const score = submission.score;

    // Update the total score and total points for average calculation
    learnerScores[learner_id].totalScore += score;
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

const CourseInfo = {
    id: 1116,
    name: "Introduction to JavaScript"
};

const AssignmentGroup = {
    id: 11161996,
    name: "Fundamentals of JavaScript",
    course_id: 609,
    group_weight: 15,
    assignments: [
        { id: 1, name: "Declare a Variable", due_at: "2024-02-11", points_possible: 80 },
        { id: 2, name: "Write a Function", due_at: "2024-02-27", points_possible: 100 },
        { id: 3, name: "Code the World", due_at: "2024-11-16", points_possible: 750 }
    ]
};

const LearnerSubmissions:= [
    { learner_id: 531, assignment_id: 1, submission: { submitted_at: "2024-02-15", score: 67 } },
    { learner_id: 531, assignment_id: 2, submission: { submitted_at: "2024-02-26", score: 92 } },
    { learner_id: 531, assignment_id: 3, submission: { submitted_at: "2024-11-16", score: 609 } },
    { learner_id: 225, assignment_id: 1, submission: { submitted_at: "2024-02-24", score: 77 } },
    { learner_id: 225, assignment_id: 2, submission: { submitted_at: "2024-02-27", score: 98 } }
];

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
