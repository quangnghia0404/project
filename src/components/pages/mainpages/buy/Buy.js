import React from 'react';
import { useState } from 'react';
import logo from '../../../../images/logo.png'
import './Buy.css'
import { useMetaMask } from 'metamask-react';
import { ethers } from 'ethers';
import ErrorMessage from './ErrorMessage';
import TxList from './TxList';
import Swal from 'sweetalert2';


const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
        if (!window.ethereum)
            throw new Error('No crypto wallet found. Please install it.');

        await window.ethereum.send('eth_requestAccounts');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({

            to: addr,
            value: ethers.utils.parseEther(ether),
        });
        Swal.fire(
            'Success!',
            'Thank you!',
            'success').then(function () {
                window.location.reload();
            });
        console.log({ ether, addr });
        console.log({ addr });
        console.log(tx);
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
    }
};


const Buy = () => {
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);
    const { status, connect, account } = useMetaMask();

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };


    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        setError();
        await startPayment({
            setError,
            setTxs,
            from: data.get('from'),
            ether: data.get('ether'),
            addr: data.get('addr'),
        });
    };
    return (
        <>
            <div className='buy-logo'>
                <img src={logo} alt="" width="100px" height="100px" />
            </div>
            <div className='buy'>
                <>
                    <div className="form_wrapper">
                        <div className="form_container">
                            <div className="title_container">
                                <h2>Buy YGO Token</h2>
                                <input type="submit" width="10px" className='connect' onClick={connect} value={status === 'connected' ? 'WELLCOME TO YGO' : 'CONNECT'} />
                            </div>
                            <form onSubmit={handleSubmit} >
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <label>Your Address</label>
                                        <div className="input_field">
                                            <input
                                                type="text"
                                                name='from'
                                                placeholder='from Address'
                                                value={account}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <label>Amount</label>
                                        <div className="input_field">
                                            <input
                                                type="number"
                                                name='ether'
                                                placeholder='Amount in ETH'
                                                onChange={onChange}
                                                step="0.1" min="0.1" max="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col_hall">
                                        <div className="input_field">
                                            <input type="text"
                                                name='addr'
                                                value='0x1c7ea8562336494788a89a4f3e49c1717c57010b' style={{ display: 'none' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field" >
                                    YGO Token:  {value * 100000}
                                </div>
                                {/* <SlideHome /> */}
                                <div className="input_field" >
                                    <ErrorMessage message={error} />
                                </div>
                                <div className="success" >
                                    <TxList txs={txs} />
                                </div>

                                <div className='btn-button'>
                                    <button className="button"
                                        type='submit'>
                                        Pay now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </div>
        </>
    );
}

export default Buy;
