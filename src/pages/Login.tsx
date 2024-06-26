import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  useIonRouter, IonButton
} from '@ionic/react';
import './Home.css';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/app','forward','replace');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => doLogin()} expand="full">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
