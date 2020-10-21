import React from 'react'

export const IdeaComponent = (props) => {
    const { ideas, setIdeas } = props;

    const downvote = (idx) => () => {
        const { votes, ...idea } = ideas[idx];
        const newIdeas = [...ideas];
        newIdeas.splice(idx, 1, { ...idea, votes: votes - 1 });
        setIdeas(newIdeas);
    }

    const upvote = (idx) => () => {
        const { votes, ...idea } = ideas[idx];
        const newIdeas = [...ideas];
        newIdeas.splice(idx, 1, { ...idea, votes: votes + 1 });
        setIdeas(newIdeas);
    }

    return <div>

        {/* {JSON.stringify(props.ideas)} */}
        <ul>
            {
                ideas.map((ele, idx) =>
                    <li key={ele.name}>{ele.name} {ele.votes}
                        <button onClick={upvote(idx)}>upvote</button>
                        <button onClick={downvote(idx)}>downvote</button></li>
                )
            }
        </ul>

    </div>
}