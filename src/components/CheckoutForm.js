import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            setError('Por favor, complete todos los campos.');
        } else {
            setError('');
            const userData = {
                name,
                phone,
                email
            };
            onConfirm(userData);
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Telefono</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                {error && <p className="has-text-danger">{error}</p>}
                <div className="control">
                    <button className="button is-primary" type="submit">Crear orden</button>
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;