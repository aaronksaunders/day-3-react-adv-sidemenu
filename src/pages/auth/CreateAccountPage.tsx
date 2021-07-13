import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";

const CreateAccountPage: React.FC = () => {
  const history = useHistory();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const doCreateAccount = () => {
    console.log(`${first}  ${last}`);
    debugger;
    alert(`email is ${email} and password is ${password}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CREATE ACCOUNT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="fixed">First</IonLabel>
          <IonInput
            onIonChange={(event: any) => setFirst(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Last</IonLabel>
          <IonInput onIonChange={(event: any) => setLast(event.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">email</IonLabel>
          <IonInput
            onIonChange={(event: any) => setEmail(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">password</IonLabel>
          <IonInput
            type="password"
            onIonChange={(event: any) => setPassword(event.target.value)}
          />
        </IonItem>
        <IonButton onClick={() => doCreateAccount()}>CREATE ACCOUNT</IonButton>
        <IonButton routerLink={"/auth/login"}>CANCEL</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccountPage;
