import React, {memo} from 'react';

interface IProps {

}

const Dashboard: React.FC<IProps> = (props) => {

    return (
        <div>
            面板页组件
        </div>
    );
};

export default memo(Dashboard);