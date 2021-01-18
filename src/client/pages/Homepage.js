import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelectorQuery } from '../hooks/useSelectorQuery';
import { GET_ALL_HOME_SECTION_DATA } from '../graphql/query';
import { fetchUsers } from '../store/actions/index';

//import Image from '../../../public/assets/images/testimage.jpg';
//import './Homepage.css';

const Homepage = (props) => {
    const { fetchUsers, users } = props;
    const variables = {
        mainslider: 1,
        fourboxdata: 2,
        identifier: "home",
        limit: 10,
        page: 1
    };

    const { data, loading, error } = useSelectorQuery(GET_ALL_HOME_SECTION_DATA, variables);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading || error) {
        return <div>Loading ...{error}</div>
    }

    if (!users) {
        return <div>Loading data....</div>
    }

    console.log("Home Page: ", users);

    return <div>
        <ul>
            {
                data.blogList.listAllBlog.map(blog => {
                    return <li key={blog.post_id}>{blog.title}</li>
                })
            }
        </ul>
    </div>;
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

const loadData = (store) => {
    return store.dispatch(fetchUsers())
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDispatchToProps)(Homepage)
};