// @flow
import React, {memo} from 'react';

interface IProps {

}

const Article: React.FC<IProps> = (props) => {
    return (
        <div>
            文章列表
        </div>
    );
};

export default memo(Article);