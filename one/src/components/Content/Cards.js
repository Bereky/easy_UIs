import { useContext } from 'react';
import externalLink from '../../asset/external-lnk.svg';
import { ThemeContext } from '../Context/ThemeContext';

const Cards = () => {

    const theme = useContext(ThemeContext)

    return ( 
        <div className={`flex flex-row flex-wrap items-center justify-center my-8 m-1 space-x-4 space-y-4 `} >
            <div className={`h-96 w-72 shadow-2xl rounded-lg flex flex-col hover:shadow-sm transition ease-in-out duration-500 mt-4 ${theme.darkMode && 'bg-darkModeCard'}`}>
                <div className="flex items-center justify-center py-3">
                    <svg  class="h-40 fill-purpleParent" viewBox="0 0 109.06 122.88"><path d="M34.43 47.86 52.8 37.6V18.31a9.233 9.233 0 0 1-5.46-3.16L17.91 32.18c.35.98.54 2.03.54 3.13 0 .92-.13 1.8-.38 2.64l16.36 9.91zm11.35-35.38a9.231 9.231 0 0 1-.59-3.25c0-2.55 1.03-4.86 2.7-6.53S51.87 0 54.42 0c2.55 0 4.86 1.03 6.53 2.7a9.205 9.205 0 0 1 2.7 6.53c0 1.12-.2 2.19-.56 3.18l29.57 17.1c.21-.25.42-.5.65-.73a9.205 9.205 0 0 1 6.53-2.7c2.55 0 4.86 1.03 6.53 2.7a9.205 9.205 0 0 1 2.7 6.53c0 2.55-1.03 4.85-2.7 6.52a9.194 9.194 0 0 1-5.32 2.62v33.91c2.07.27 3.92 1.22 5.32 2.62a9.199 9.199 0 0 1 2.7 6.52 9.222 9.222 0 0 1-9.23 9.23 9.205 9.205 0 0 1-7.15-3.39l-29.61 17.12c.36.99.56 2.06.56 3.18 0 2.55-1.03 4.86-2.7 6.53a9.205 9.205 0 0 1-6.53 2.7c-2.55 0-4.86-1.03-6.53-2.7s-2.7-3.98-2.7-6.53c0-1.14.21-2.24.59-3.25L16.35 93.38a9.205 9.205 0 0 1-7.13 3.36c-2.55 0-4.86-1.03-6.53-2.7C1.03 92.37 0 90.06 0 87.51s1.03-4.85 2.7-6.52a9.242 9.242 0 0 1 5.25-2.62V44.44a9.18 9.18 0 0 1-5.25-2.62A9.164 9.164 0 0 1 0 35.3c0-2.55 1.03-4.86 2.7-6.53a9.205 9.205 0 0 1 6.53-2.7 9.205 9.205 0 0 1 7.16 3.4l29.39-16.99zm15.76 2.61a9.192 9.192 0 0 1-5.55 3.23V37.6l18.33 10.62 16.85-9.74c-.37-.99-.56-2.07-.56-3.18 0-1.08.19-2.13.53-3.09l-29.6-17.12zm36.69 29.3a9.159 9.159 0 0 1-4.92-2.56c-.19-.19-.37-.38-.54-.59l-16.82 9.72v20.78l16.89 9.75c.15-.17.3-.34.46-.5a9.194 9.194 0 0 1 4.92-2.56V44.39h.01zm-7.07 46.27c-.36-.98-.55-2.04-.55-3.14 0-1.16.21-2.27.61-3.3l-16.34-9.43-18.89 10.98v18.79a9.192 9.192 0 0 1 5.55 3.23l29.62-17.13zm-43.82 17.06a9.233 9.233 0 0 1 5.46-3.16V85.68l-18.96-11-16.09 9.29c.45 1.09.71 2.29.71 3.55 0 1.12-.2 2.19-.56 3.18l29.44 17.02zM10.76 78.41c1.93.32 3.66 1.25 4.99 2.58.1.1.19.2.28.3l16.39-9.46V50.36L16.64 40.8c-.27.37-.57.71-.89 1.03a9.255 9.255 0 0 1-4.99 2.58v34zM9.24 41.34c.04 0 .08-.01.12-.01h.08a6 6 0 0 0 4.06-1.76 6.023 6.023 0 0 0 1.77-4.27c0-1.67-.68-3.18-1.77-4.27-1.09-1.09-2.6-1.77-4.27-1.77s-3.18.68-4.27 1.77a6.023 6.023 0 0 0-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.03 6.03 0 0 0 4.28 1.77zm49.44 68.05a6.023 6.023 0 0 0-4.27-1.77c-1.67 0-3.18.68-4.27 1.77-1.09 1.09-1.77 2.6-1.77 4.27s.68 3.18 1.77 4.27 2.6 1.77 4.27 1.77c1.67 0 3.18-.68 4.27-1.77 1.09-1.09 1.77-2.6 1.77-4.27s-.67-3.18-1.77-4.27zm0-104.43a6.023 6.023 0 0 0-4.27-1.77c-1.67 0-3.18.68-4.27 1.77s-1.77 2.6-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.023 6.023 0 0 0 4.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 0 0 1.77-4.27c0-1.67-.67-3.18-1.77-4.27zm45.42 78.29a6.023 6.023 0 0 0-4.27-1.77c-1.67 0-3.18.68-4.27 1.77a6.023 6.023 0 0 0-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.023 6.023 0 0 0 4.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 0 0 1.77-4.27c0-1.67-.67-3.18-1.77-4.27zm-90.6 0c-1.09-1.09-2.6-1.77-4.27-1.77s-3.18.68-4.27 1.77a6.023 6.023 0 0 0-1.77 4.27c0 1.67.68 3.18 1.77 4.27s2.6 1.77 4.27 1.77 3.18-.68 4.27-1.77a6.023 6.023 0 0 0 1.77-4.27 6.065 6.065 0 0 0-1.77-4.27zm80.95-45.22c.08.08.14.18.2.28.06.1.1.2.14.31.23.34.49.66.77.95a6.023 6.023 0 0 0 4.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 0 0 1.77-4.27c0-1.67-.68-3.18-1.77-4.27a6.023 6.023 0 0 0-4.27-1.77c-1.67 0-3.18.68-4.27 1.77a6.023 6.023 0 0 0-1.77 4.27c.01.99.25 1.91.66 2.73zM35.41 71.49a1.687 1.687 0 0 1 .43.88l17.13 10.07V62.56L35.41 52.11v19.38zm37.56-19.11L55.96 62.57v19.89l17.01-10.05V52.38zM54.39 39.99l-16.6 9.93 16.69 10.05 16.21-9.84-16.3-10.14z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                </div>
                <div className={`flex flex-col items-center mx-3 my-2 cursor-default ${theme.darkMode && 'text-darkModeText'}`}>
                    <h2 className="font-bold text-lg">Blockchain</h2>
                    <p className="text-center">Learn the fundamentals</p>
                </div>
                <div className="flex flex-col mt-12 h-auto mx-3 space-y-1">
                    <a href="https://www.horizen.io/blockchain-academy/technology/advanced/what-is-a-blockchain" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start font-medium text-purpleParent text-sm ${theme.darkMode && 'text-darkModeText'}`}>Horizon.io</p>
                        <img src={externalLink} alt="external" className="h-4 cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=qOVAbKKSH10" alt="external"  target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start text-purpleParent font-medium text-sm ${theme.darkMode && 'text-darkModeText'}`}>Coding Tech </p>
                        <img src={externalLink} alt="external" className="h-4 cursor-pointer" />
                    </a>
                </div>
            </div>

            <div className={`h-96 w-72 shadow-2xl rounded-lg flex flex-col hover:shadow-sm transition ease-in-out duration-500 ${theme.darkMode && 'bg-darkModeCard'}`}>
                <div className="flex items-center justify-center py-3">
                    <svg className="h-40 fill-purpleParent" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.516 19.869c-2.136 8.579-10.819 13.787-19.385 11.652-8.568-2.12-13.787-10.824-11.647-19.381 2.131-8.577 10.819-13.796 19.38-11.661 8.573 2.141 13.792 10.819 11.652 19.396zM23.052 13.719c0.317-2.12-1.303-3.265-3.521-4.036l0.72-2.871-1.756-0.443-0.697 2.813c-0.459-0.12-0.937-0.224-1.417-0.333l0.699-2.839-1.761-0.437-0.719 2.885c-0.38-0.089-0.749-0.177-1.12-0.265l-2.416-0.605-0.469 1.881c0 0 1.303 0.296 1.271 0.312 0.715 0.183 0.844 0.645 0.824 1.021l-1.969 7.895c-0.099 0.22-0.323 0.543-0.817 0.417 0.016 0.025-1.281-0.317-1.281-0.317l-0.88 2.009 2.281 0.568 1.239 0.323-0.724 2.923 1.761 0.432 0.724-2.891c0.479 0.136 0.937 0.255 1.395 0.365l-0.676 2.869 1.76 0.443 0.724-2.921c2.989 0.567 5.24 0.343 6.188-2.365 0.76-2.183-0.043-3.437-1.62-4.26 1.135-0.261 2-1.016 2.239-2.573zM19.036 19.349c-0.536 2.187-4.208 1-5.4 0.703l0.963-3.864c1.193 0.307 5.005 0.895 4.437 3.161zM19.584 13.693c-0.496 1.989-3.548 0.984-4.543 0.733l0.876-3.52c0.989 0.239 4.181 0.697 3.667 2.781z"/>
                      </svg>
                </div>
                <div className={`flex flex-col items-center mx-3 my-2 cursor-default ${theme.darkMode && 'text-darkModeText'}`}>
                    <h2 className="font-bold text-lg">Bitcoin</h2>
                    <p className="text-center">The first digital money</p>
                </div>
                <div className="flex flex-col mt-12 h-auto mx-3 space-y-1">
                    <a href="https://bitcoin.org/bitcoin.pdf" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 cursor-pointer hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start font-medium text-purpleParent text-sm ${theme.darkMode && 'text-darkModeText'}`}>Satoshi Nakamoto </p>
                        <img src={externalLink} alt="external" className="h-4 cursor-pointer" />
                    </a>
                    <a href="https://nakamoto.com/introduction-to-cryptocurrency" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 cursor-pointer hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start text-purpleParent font-medium text-sm ${theme.darkMode && 'text-darkModeText'}`}>Haseeb Qureshi </p>
                        <img src={externalLink} alt="external" className="h-4 cursor-pointer" />
                    </a>
                </div>
            </div>

            <div className={`h-96 w-72 shadow-2xl rounded-lg flex flex-col hover:shadow-sm transition ease-in-out duration-500 ${theme.darkMode && 'bg-darkModeCard'}`}>
                <div className="flex items-center justify-center py-3">
                    <svg  className="h-40 fill-purpleParent" viewBox="0 0 226.777 226.777">
                        <g>
                            <polygon  points="112.553,157 112.553,86.977 44.158,116.937 	"/>
                            <polygon  points="112.553,82.163 112.553,-0.056 46.362,111.156 	"/>
                            <polygon  points="116.962,-0.09 116.962,82.163 184.083,111.566 	"/>
                            <polygon  points="116.962,86.977 116.962,157.002 185.405,116.957 	"/>
                            <polygon  points="112.553,227.406 112.553,171.085 44.618,131.31 	"/>
                            <polygon  points="116.962,227.406 184.897,131.31 116.962,171.085 	"/>
                        </g>
                    </svg>
                </div>
                <div className={`flex flex-col items-center mx-3 my-2 cursor-default ${theme.darkMode && 'text-darkModeText'}`}>
                    <h2 className="font-bold text-lg">Ethereum</h2>
                    <p className="text-center">The second gen. blockchain</p>
                </div>
                <div className="flex flex-col mt-12 h-auto mx-3 space-y-1">
                    <a href="https://ethereum.org/en/whitepaper/" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 cursor-pointer hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start font-medium text-purpleParent text-sm ${theme.darkMode && 'text-darkModeText'}`}>Vitalik Buterin </p>
                        <img src={externalLink} alt="" className="h-4 cursor-pointer" />
                    </a>
                    <a href="https://www.techtarget.com/whatis/definition/Ethereum" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 cursor-pointer hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start text-purpleParent font-medium text-sm ${theme.darkMode && 'text-darkModeText'}`}>TechTarget </p>
                        <img src={externalLink} alt="" className="h-4 cursor-pointer" />
                    </a>
                </div>
            </div>

            <div className={`h-96 w-72 shadow-2xl rounded-lg flex flex-col hover:shadow-sm transition ease-in-out duration-500 ${theme.darkMode && 'bg-darkModeCard'}`}>
                <div className="flex items-center justify-center py-3">
                    <svg className="h-40 fill-purpleParent"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"/></svg>
                </div>
                <div className={`flex flex-col items-center mx-3 my-2 cursor-default ${theme.darkMode && 'text-darkModeText'}`}>
                    <h2 className="font-bold text-lg">Tether</h2>
                    <p className="text-center">Learn about stablecoins</p>
                </div>
                <div className="flex flex-col mt-12 h-auto mx-3 space-y-1">
                    <a href="https://en.wikipedia.org/wiki/Tether_(cryptocurrency)" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 cursor-pointer hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300" >
                        <p className={`text-start font-medium text-purpleParent text-sm ${theme.darkMode && 'text-darkModeText'}`}>Tether Wikipedia</p>
                        <img src={externalLink} alt="" className="h-4 cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=GsSSLDzKCOE" alt="external" target="_blank" className="flex flex-row h-auto px-2 items-center justify-between bg-purpleLight bg-opacity-30 rounded-md py-1 cursor-pointe hover:bg-purpleLight hover:bg-opacity-20 transition ease-in-out duration-300">
                        <p className={`text-start text-purpleParent font-medium text-sm ${theme.darkMode && 'text-darkModeText'}`}>99Bitcoins </p>
                        <img src={externalLink} alt="" className="h-4 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;