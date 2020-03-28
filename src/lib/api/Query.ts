import ApolloClient, {gql} from 'apollo-boost';
import {UserAuth} from "./model/Model";

const API_URL = "https://api.e-edu.the-morpheus.de/graphql";
/*const API_URL = "http://steve.de/graphql";*/

export default class Query {

    static client = new ApolloClient({uri: API_URL});
    private _queue: any[] = [];

    async execute(): Promise<void> {
        for (let fun of this._queue) {
            await fun();
        }
    }

    authenticate(model: UserAuth): Query {
        this.addMutation(gql`
            mutation {
                authenticate(userAuth: {passwordHash: "Test", key: "Max"}) {
                    result
                }
            }`
        );

        return this;
    }

    jwt(): Query {
        this.addMutation(gql`
            mutation {
                jwt {
                    token
                    status
                }
            }`
        );

        return this;

    }

    private addMutation(mutation: any) {
        this.add(async () => {
            let result = await Query.client.mutate({mutation: mutation});
            console.log(result);
        });
    }

    private addQuery(query: any) {
        this.add(async () => {
            let result = await Query.client.query({query: query});
            console.log(result);
        });
    }

    private add(fun: any) {
        this._queue.push(fun);
    }

    public static async queryGQL(query: any) {
        return Query.client.query({query: query});
    }

    public static async mutationGQL(mutation: any) {
        return await Query.client.mutate({mutation: mutation});
    }

}
