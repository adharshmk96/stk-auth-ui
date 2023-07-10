import { Icon } from "@iconify-icon/solid";

interface loadingProps {
  // add props here
}

function Loading(props: loadingProps) {
  return (
    <div class="fixed inset-0 flex items-center justify-center dark:bg-gray-700">
      <div class="animate-pulse">
        <Icon icon="ei:spinner-2" class="text-9xl dark:text-gray-100 animate-spin" />
      </div>
    </div>
  );
}

export default Loading;
