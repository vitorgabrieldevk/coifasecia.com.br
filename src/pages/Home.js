

// --- | Importação de Components | ---

import Topo      from    "../components/Topo";
import Rodape   from    "../components/Rodape"; 
import Fab   from    "../components/Fab"; 


function Home() {
    return (
        <section class="site-corpo">
            <Topo />
            <Fab />
            <Rodape />
        </section>
    );
};

export default Home;