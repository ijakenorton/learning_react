import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import userService, {User} from '../services/user-service'
const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) {
            return;
          }
          setLoading(false);
          setError(err.message);
        });
  
      return () => cancel();
    }, []);

    return {users, error, isLoading, setError, setUsers}
}
export default useUsers