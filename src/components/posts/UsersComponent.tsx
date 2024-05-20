import React, {FC, useEffect, useState} from 'react';
import {UserModel} from "../../models/UserModel";
import UserComponent from "../post/UserComponent";
import {getAllUsers} from "../../services/jpg.api.service";


interface IProps {
    users: UserModel[];
}

type IPropsTypes = IProps & { children?: React.ReactNode };

const UsersComponent:FC<IPropsTypes> = () => {

    const [users, setPosts] = useState<UserModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {users.map((user) => (<UserComponent user={user}/>))}
        </div>
    );
};

export default UsersComponent;