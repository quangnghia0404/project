import React from 'react';
import './Sumary.css'


const Sumary = () => {

    return (
        <>
            <div className="flex-containers" style={{ backgroundColor: "#000000" }}>
                <div className="flex-item-tr">
                    <div className='_ti'>
                        <p>sumary</p>
                    </div>
                    <table id="customers">
                        <tbody >
                            <tr>
                                <td>Name</td>
                                <td>YGO</td>
                            </tr>
                            <tr>
                                <td>Token Symbol</td>
                                <td>YGO token</td>
                            </tr>
                            <tr>
                                <td>Total Supply</td>
                                <td>200,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='bep'>
                        <div className='_ti'>
                            <p> BEP20 & KRC20:</p>
                        </div>
                        <input className="js-copytextarea" type="text" size="35" name="" value="0x6ef238e9e8cd2a96740897761c18894fc086b9d" />
                        <button className="js-textareacopybtn"><i class="far fa-copy"></i></button>


                        {/* 
                        <button className="js-textareacopybtn" style={{ verticalAlign: "top" }}>
                            Copy Textarea
                        </button>
                        <textarea className="js-copytextarea" defaultValue={"Hello I'm some text"} /> */}


                    </div>


                </div>

                <div className="flex-item-ph">
                    <div className='_ti'>
                        <p>TOKEN RELEASE SCHEDULE</p>
                    </div>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Allocation</th>
                                <th>
                                    Locking schedule</th>
                            </tr>
                            <tr>
                                <td>Private</td>
                                <td> 5% monthly</td>

                            </tr>
                            <tr>
                                <td>Public</td>
                                <td>TGE 100% unlock</td>

                            </tr>
                            <tr>
                                <td>Partners</td>
                                <td>
                                    TGE no unlock, 10% monthly</td>

                            </tr>
                            <tr>
                                <td>Farming</td>
                                <td> 22% monthly</td>

                            </tr>
                            <tr>
                                <td>Team</td>
                                <td>
                                    Lock 1 year, 16% monthly</td>
                            </tr>
                            <tr>
                                <td>Aidrop</td>
                                <td>1% monthly</td>

                            </tr>
                            <tr>
                                <td>Liquidity Pool</td>
                                <td>8% monthly</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="flex-containers" style={{ backgroundColor: "#000000" }}>
                <div className="heading white-heading" style={{ padding: "0px" }, { fontSize: "40px" }}>USAGE OF YGO TOKEN</div>

            </div>
            <div className="flex-containers" style={{ backgroundColor: "#000000", fontSize: '20px' }}>
                <p>YGO Tocken: The reward, when the player wins the adventurous battles, is equipment, the YGO bonus token. YGO is the main material to upgrade card, match cards.</p>
                <p>YGO token has a fixed supply and a fixed growth path of 5% per year, this token can be exchanged for YGO tokens or exchanged on Pancakeswap exchange, decentralized exchanges The center allows trading in BNB or BUSD. The project also uses 25% of YGO tokens to provide liquidity for YGO tokens. The long-built YGO token will become the project's governance token, while the YGO token becomes the in-game accumulation and exchange token.
                </p>
                <p>Using YGO, players can explore the universe, buy blind boxes, combine cards or items to decorate, upgrade, build buildings, and land in the game.</p>

            </div>

            <div className='img-button' style={{ backgroundColor: "#000000" }}>
                <a href="https://mytheria.io/" >
                    <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/266710481_317081073640858_7447442999942558565_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RwqBAMUN16EAX8hKIyF&_nc_ht=scontent.fdad1-1.fna&oh=03_AVKR5U2JuoZCxm_MguiAYIo8-sHMNpkJYXXGeRM7BICpHg&oe=620517C4" alt="" width="500px"
                        height="200px" />
                </a>
            </div>

        </>
    );
}

export default Sumary;
