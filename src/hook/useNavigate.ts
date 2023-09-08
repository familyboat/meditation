import { useNavigate as useNavigateRouter } from "react-router-dom";
import { useCallback, startTransition } from "react";

type PathProps = string;

export function useNavigate() {
  const navigate = useNavigateRouter();
  const go = useCallback(
    (path: PathProps) => {
      startTransition(() => {
        // Todo: scroll to top of the page
        navigate(path, {
          replace: true,
        });
      });
    },
    [navigate],
  );
  return go;
}
