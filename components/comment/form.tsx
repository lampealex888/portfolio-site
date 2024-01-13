import { useAuth0 } from "@auth0/auth0-react";

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="textarea textarea-bordered w-full max-h-40 resize-none text-lg"
        rows={2}
        placeholder={
          isAuthenticated
            ? `What are your thoughts?`
            : "Please login to leave a comment"
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="btn btn-primary">Send</button>
            <button
              className="btn btn-ghost"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}
