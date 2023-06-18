import axios, {AxiosInstance} from "axios";


class Communicator {
    private static instance: Communicator;

    private axios!: AxiosInstance;

    constructor() {
        if (!Communicator.instance) {
            Communicator.instance = this;
            this.axios = axios.create({
                baseURL: "https://pokeapi.co/api/v2/",
                timeout: 1000
            });
        }
        return Communicator.instance;
    }

    public get(url: string, config?: object) {
        return this.axios.get(url, config).then(({data}) => data);
    }

    public getPokemons(): Promise<[]> {
        return this.get('pokemon').then((data) => data.results);
    }
}

const communicator: Communicator = new Communicator();

export default communicator;

