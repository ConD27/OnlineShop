import { useAuthContext } from '@/hooks/useAuth'

const Cart = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Cart</h1>
      {userPayload?.role === 'ADMIN'
        ? <h2>Administrador: </h2>
        : <h2>Cliente: </h2>}
    </>
  )
}

export default Cart
