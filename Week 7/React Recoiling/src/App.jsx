import { useState } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { messagingAtom, networkAtom, notificationsAtom } from './atom';


function App(){


  return (
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  )

}

function MainApp(){
  
  const networkNotificationCount = useRecoilValue(networkAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom)

  return (
    <>
      
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs</button>
      <button>Messaging ({messagingCount >= 100 ? "99+" : messagingCount})</button>
      <button>Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})</button>
      
      
      <button onClick={() => {
        setMessagingAtomCount(messagingCount + 1)
      }}>Me</button>

    
    </>
  )
}
export default App 