import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            {comments.length} comments
            {
                comments.map ( ( comment ) =>
                    <div key={comment.id}>
                        {comment.body}
                    </div>
                )}
        </div>
    );
};

export default Comments;