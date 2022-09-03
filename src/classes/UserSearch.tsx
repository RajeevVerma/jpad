import { Component, ReactNode } from "react";

interface IUserSearchProps {
    users: {
        name: string,
        age: number
    }[]
}

interface IUserSearchState {
    name: string,
    user: {
        name: string,
        age: number
    } | undefined;
}

class UserSearch extends Component<IUserSearchProps> {
    state: IUserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () => {
        var foundUser = this.props.users.find(x => x.name.indexOf(this.state.name) > -1);
        this.setState({ user: foundUser });
        console.log(foundUser);
    }

    render(): ReactNode {
        return <div>User Search
            <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            <button onClick={this.onClick} > Find</button>
            <div>
                {
                    this.state.user && this.state.user.name
                }
                {
                    this.state.user && this.state.user.age
                }
            </div>
        </div>;
    }
}

export default UserSearch;