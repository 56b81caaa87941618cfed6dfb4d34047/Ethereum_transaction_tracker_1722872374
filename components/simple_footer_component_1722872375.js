/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722872375", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="footer-container" class="max-w-screen-xl mx-auto">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            EtherScan: Real-Time Ethereum Tracker
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white">
                        Stay ahead of the curve with our cutting-edge Ethereum transaction monitoring service. Powered by leading blockchain technology, EtherScan provides lightning-fast updates on the latest Ether movements across the network. Never miss a beat with customizable alerts and detailed analytics at your fingertips. Simplify your workflow and maximize your edge in the dynamic world of decentralized finance.
                        Stay ahead of the curve with our cutting-edge Ethereum transaction monitoring service. Powered by leading blockchain technology, EtherScan provides lightning-fast updates on the latest Ether movements across the network. Never miss a beat with customizable alerts and detailed analytics at your fingertips. Simplify your workflow and maximize your edge in the dynamic world of decentralized finance.
                        <button class="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
                            Hello World
                        </button>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
