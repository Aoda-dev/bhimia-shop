import React from 'react';

interface Props {
  className?: string;
}

const GpsIcon = ({ className }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_2166)">
        <path
          d="M9.66699 9.16675C11.0477 9.16675 12.167 8.04746 12.167 6.66675C12.167 5.28604 11.0477 4.16675 9.66699 4.16675C8.28628 4.16675 7.16699 5.28604 7.16699 6.66675C7.16699 8.04746 8.28628 9.16675 9.66699 9.16675Z"
          stroke="#3F4E65"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.66667 0C7.89856 0 6.20286 0.702379 4.95262 1.95262C3.70238 3.20286 3 4.89856 3 6.66667C3 8.24333 3.335 9.275 4.25 10.4167L9.66667 16.6667L15.0833 10.4167C15.9983 9.275 16.3333 8.24333 16.3333 6.66667C16.3333 4.89856 15.631 3.20286 14.3807 1.95262C13.1305 0.702379 11.4348 0 9.66667 0V0Z"
          stroke="#3F4E65"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_2166">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LetterIcon = ({ className }: Props) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.37533 0.333252H14.6253C15.3171 0.333207 15.9827 0.59788 16.4855 1.07298C16.9884 1.54808 17.2903 2.19758 17.3295 2.88825L17.3337 3.04158V10.9583C17.3337 11.65 17.069 12.3156 16.5939 12.8184C16.1188 13.3213 15.4693 13.6233 14.7787 13.6624L14.6253 13.6666H3.37533C2.68354 13.6666 2.01797 13.402 1.51513 12.9269C1.0123 12.4518 0.710324 11.8023 0.671159 11.1116L0.666992 10.9583V3.04158C0.666947 2.3498 0.931621 1.68423 1.40672 1.18139C1.88182 0.678558 2.53132 0.376584 3.22199 0.337419L3.37533 0.333252H14.6253H3.37533ZM16.0837 4.81075L9.29199 8.38575C9.21531 8.42626 9.13102 8.45037 9.04451 8.45654C8.958 8.46271 8.87115 8.4508 8.78949 8.42159L8.70949 8.38658L1.91699 4.81158V10.9583C1.91701 11.3242 2.05463 11.6768 2.30256 11.9461C2.55048 12.2153 2.89058 12.3815 3.25533 12.4116L3.37533 12.4166H14.6253C14.9915 12.4166 15.3442 12.2788 15.6134 12.0307C15.8827 11.7826 16.0487 11.4423 16.0787 11.0774L16.0837 10.9583V4.81075ZM14.6253 1.58325H3.37533C3.00933 1.58327 2.65673 1.72089 2.3875 1.96882C2.11827 2.21674 1.95211 2.55683 1.92199 2.92159L1.91699 3.04158V3.39908L9.00033 7.12659L16.0837 3.39825V3.04158C16.0836 2.67546 15.9459 2.32274 15.6978 2.0535C15.4497 1.78425 15.1094 1.61817 14.7445 1.58825L14.6253 1.58325Z"
        fill="#3F4E65"
      />
    </svg>
  );
};

const SultanIcon = ({ className }: Props) => {
  return (
    <svg
      width="156"
      height="66"
      className={className}
      viewBox="0 0 156 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_40_107)">
        <path
          d="M48.5125 24.6743C48.4882 21.1069 47.3257 17.6401 45.194 14.7779C45.1655 14.7184 45.1258 14.665 45.077 14.6205C43.6523 12.7179 41.9207 11.0654 39.9529 9.73077C39.9015 9.68971 39.8473 9.65214 39.7908 9.61832C36.7407 7.58887 33.3039 6.21058 29.6958 5.56979H29.6508C29.6272 5.56304 29.6023 5.56304 29.5787 5.56979C28.6782 5.39885 27.7101 5.27739 26.7555 5.19642C26.6835 3.20815 26.2738 1.98009 25.792 1.21537C25.6447 0.932775 25.4408 0.6835 25.1929 0.483059C24.945 0.282618 24.6585 0.135304 24.3511 0.050293H24.2295H24.1485C23.8407 0.135495 23.5536 0.282842 23.305 0.48323C23.0564 0.683619 22.8516 0.932792 22.7031 1.21537C22.2168 1.98009 21.8026 3.21264 21.7396 5.20092C12.3785 5.99263 4.58433 11.1073 1.47748 18.0258C1.45977 18.0621 1.44472 18.0997 1.43245 18.1382C0.513654 20.2046 0.0381763 22.4403 0.0366211 24.7013C0.0366211 30.0589 2.64367 35.0476 7.385 38.7677C7.06004 40.8612 7.26277 43.0025 7.97485 44.998C6.85818 48.5966 5.86759 53.1895 7.74971 57.0941C7.75053 57.106 7.75053 57.1181 7.74971 57.13C9.92001 61.5834 14.1705 62.789 18.2815 63.9496C20.2384 64.4245 22.1433 65.092 23.9684 65.9423L24.0314 65.9693H24.072C24.1139 65.9737 24.1561 65.9737 24.198 65.9693H24.2656C24.3473 65.9702 24.428 65.9501 24.4997 65.9109C26.3252 65.051 28.2317 64.3744 30.1911 63.8911C32.5325 63.2298 34.9234 62.5416 36.9451 61.2685L37.0037 61.228C38.611 60.2207 39.9003 58.7798 40.7229 57.0716C42.6275 53.1625 41.6234 48.6281 40.5698 45.1149C40.5623 45.0903 40.55 45.0674 40.5338 45.0474C41.6054 42.4474 41.3082 39.6494 41.1686 38.7137C45.9055 35.0116 48.5125 30.0319 48.5125 24.6743ZM47.4994 24.6743C47.4984 26.1297 47.2908 27.5777 46.8826 28.9748C46.1627 27.5083 45.2363 26.1526 44.1314 24.9487C42.0827 22.6996 38.458 19.9241 32.5775 18.8355C36.4353 17.3638 40.4247 16.2627 44.4916 15.5472C46.4217 18.2021 47.4733 21.3931 47.4994 24.6743ZM43.8207 14.643C38.5349 15.5937 33.3909 17.2094 28.5116 19.4517C28.1964 16.9012 27.0617 14.8949 25.5578 14.1617C25.6074 13.9817 25.6479 13.8108 25.6884 13.6398C30.1621 12.1384 34.7844 11.122 39.4756 10.608C41.1112 11.7366 42.5747 13.0957 43.8207 14.643ZM37.9267 47.1122L37.6565 47.3506C36.692 48.1046 35.5573 48.6111 34.3516 48.8261H34.293H34.1985H34.1715C31.6545 49.2759 28.3945 48.9385 24.4277 47.7734H24.3736H24.1755H24.135C22.3281 48.3251 20.4742 48.7091 18.5967 48.9205H18.5156C14.999 49.2624 12.3515 48.6416 10.6089 47.0492C8.58722 45.2859 8.20899 42.5194 8.20899 40.648C9.06513 42.2584 10.3428 43.6064 11.9057 44.5481C14.4947 46.0776 17.7592 46.3475 21.618 45.4073C21.8674 45.886 22.2438 46.2869 22.706 46.5661C23.1682 46.8454 23.6984 46.9923 24.2386 46.9907C24.7781 46.9925 25.3078 46.8456 25.7693 46.5663C26.2308 46.2869 26.6063 45.8859 26.8546 45.4073C30.7134 46.3654 33.9824 46.0776 36.5669 44.5481C38.132 43.609 39.4103 42.2604 40.2636 40.648C40.2996 42.5194 39.9214 45.2858 37.9267 47.1122ZM35.6754 60.8907C33.9288 61.7531 32.0927 62.4214 30.2001 62.8834C29.3368 62.0651 28.5954 61.1274 27.9983 60.099C27.0978 58.484 27.548 56.7072 28.2189 55.0248C28.3315 54.7369 28.4666 54.4265 28.6107 54.1026C29.16 52.8566 29.8174 51.3541 29.5922 49.9641C30.3304 50.0532 31.0731 50.0997 31.8166 50.1036C32.5629 50.1061 33.3082 50.0489 34.0454 49.9327C34.3291 50.7334 33.9238 52.1099 33.5591 53.3469C33.2491 54.2008 33.0626 55.0945 33.0053 56.0009C33.0041 56.9743 33.2481 57.9323 33.7147 58.7868C34.1813 59.6413 34.8555 60.3648 35.6754 60.8907ZM24.2701 64.9392C23.5406 64.3994 21.0146 62.3167 20.5283 58.9114C20.0781 55.8165 21.4064 52.4517 24.4412 48.9025C25.7812 49.2857 27.1436 49.5861 28.5206 49.8022C28.8808 50.9448 28.2459 52.3888 27.6831 53.6708C27.5345 54.0127 27.3949 54.3366 27.2779 54.6379C26.5349 56.5498 25.9991 58.592 27.1158 60.5758C27.6617 61.5216 28.3226 62.3965 29.0834 63.1803C27.4277 63.6203 25.8151 64.209 24.2656 64.9392H24.2701ZM36.0626 43.6934C33.6401 45.1239 30.4973 45.3398 26.742 44.3412C26.6759 44.3193 26.6059 44.3114 26.5365 44.318C26.4671 44.3245 26.3998 44.3453 26.3389 44.3791C26.278 44.413 26.2247 44.459 26.1825 44.5144C26.1403 44.5698 26.11 44.6334 26.0937 44.7011C25.9607 45.0788 25.7131 45.4057 25.3855 45.6363C25.0578 45.8669 24.6664 45.9897 24.2656 45.9876C23.8615 45.9907 23.4668 45.8663 23.1377 45.632C22.8086 45.3977 22.562 45.0656 22.433 44.6831C22.4158 44.618 22.3854 44.5573 22.3435 44.5046C22.3017 44.452 22.2493 44.4086 22.1898 44.3772C22.1255 44.3427 22.0547 44.3217 21.9819 44.3155C21.9091 44.3093 21.8358 44.318 21.7666 44.3412C18.0203 45.3353 14.891 45.1194 12.464 43.6934C10.5636 42.5211 9.14298 40.7112 8.45664 38.5878C8.86638 37.7601 10.8746 33.9994 15.3863 29.627C15.8681 29.3481 21.9917 26.0014 33.1539 29.654C37.634 34.0039 39.6783 37.8051 40.079 38.5923C39.3837 40.7102 37.9589 42.513 36.0581 43.6799L36.0626 43.6934ZM20.9516 20.8957C20.9516 18.3181 21.8927 16.051 23.1714 15.2188C23.3106 15.1202 23.4619 15.04 23.6217 14.9804C23.7807 14.9205 23.9475 14.8841 24.117 14.8724H24.3061C24.4782 14.8764 24.6485 14.9083 24.8104 14.9669C24.9691 15.0194 25.1204 15.092 25.2607 15.1828C26.3998 15.889 27.2824 17.7289 27.485 19.9196C27.52 20.2438 27.5366 20.5697 27.5345 20.8957C27.5345 20.9497 27.5345 21.0082 27.5345 21.0667C27.5268 21.9026 27.4118 22.7341 27.1923 23.5408C27.0965 23.8757 26.9807 24.2047 26.8456 24.5259C26.2377 25.9699 25.2877 26.919 24.234 26.919C23.1804 26.919 22.2304 25.9744 21.6225 24.5304C21.477 24.1953 21.3581 23.8494 21.2668 23.4958C21.0454 22.6471 20.9394 21.7726 20.9516 20.8957ZM22.0187 26.9415C20.4954 27.0102 18.9848 27.2516 17.516 27.6613C18.4841 26.8381 19.5693 25.9879 20.767 25.1332C21.0684 25.8083 21.4928 26.4215 22.0187 26.9415ZM26.3368 27.0855C26.9341 26.5408 27.4085 25.8753 27.7281 25.1332C29.0789 26.1093 30.3307 27.1035 31.4473 28.0796C29.7716 27.6188 28.0631 27.2865 26.3368 27.0855ZM25.918 12.4883C26.3129 10.6926 26.5748 8.87035 26.7015 7.03625C27.6021 6.86082 28.5251 6.69437 29.4752 6.54143C32.5191 7.09115 35.4406 8.17879 38.1023 9.75327C33.9641 10.2817 29.8848 11.1974 25.918 12.4883ZM23.4821 1.80465C23.6483 1.47941 23.9067 1.21029 24.225 1.03093C24.5423 1.21175 24.8003 1.48048 24.968 1.80465C25.3012 2.36695 25.6434 3.36559 25.7154 5.08846C25.7154 5.40335 25.7154 5.74073 25.7154 6.10509V6.20855C25.7154 6.53694 25.6884 6.87881 25.6659 7.25667C25.5027 9.14738 25.2017 11.0237 24.7654 12.8706C24.6933 13.199 24.6213 13.5319 24.5402 13.8783C24.436 13.862 24.3305 13.8545 24.225 13.8558C24.1016 13.8579 23.9783 13.8669 23.8558 13.8828C23.8063 13.6713 23.7523 13.4644 23.7072 13.253C23.293 11.4973 22.9922 9.71673 22.8067 7.92243C22.7707 7.56256 22.7437 7.22069 22.7301 6.8968C22.7166 6.57292 22.7031 6.357 22.6986 6.10509C22.6986 5.74073 22.6986 5.40335 22.6986 5.09296C22.8067 3.36559 23.1534 2.36695 23.4821 1.80465ZM21.717 6.17706C21.717 6.48745 21.7396 6.81583 21.7621 7.15321C12.5226 9.66329 6.80415 13.37 3.89542 15.7001C7.46154 10.5315 14.031 6.85182 21.717 6.17706ZM2.32398 18.5206C2.67969 18.1382 4.67888 16.069 8.62774 13.7118C12.7664 11.2886 17.213 9.43357 21.8476 8.19683C22.0538 10.0254 22.3696 11.84 22.7932 13.6309C17.795 15.5443 13.1804 18.3369 9.16807 21.8764C5.11565 25.547 3.05342 28.9658 2.22042 30.6122C1.41211 28.6967 1.00472 26.6362 1.0233 24.5575C1.04189 22.4788 1.48606 20.4259 2.32849 18.5251L2.32398 18.5206ZM2.77425 31.7997C3.40462 30.3783 7.92082 21.1431 21.7216 15.1558C20.6364 16.4243 19.943 18.4981 19.943 20.8912C19.9323 21.9782 20.0841 23.0608 20.3933 24.103C12.3785 29.744 8.7268 35.8483 7.7227 37.7421C5.67764 36.1253 3.99103 34.1018 2.76975 31.7997H2.77425ZM8.62774 46.2935C8.98647 46.8681 9.41946 47.3929 9.91551 47.8544C10.7579 48.6155 11.7546 49.1863 12.8377 49.5278C11.7778 49.863 10.8036 50.4248 9.98305 51.1742C8.98057 52.1385 8.28382 53.3758 7.97936 54.7324C7.30846 51.9524 7.86229 48.9205 8.60523 46.2935H8.62774ZM8.7268 56.7702C9.01497 49.9686 15.3863 50.0721 15.6654 50.0811C15.713 50.0828 15.7604 50.0751 15.805 50.0586C16.1427 50.0586 16.4894 50.0856 16.8406 50.0586C14.7514 51.705 13.4861 53.6123 13.0809 55.749C12.7522 57.6744 13.0438 59.6544 13.9139 61.4035C11.7526 60.4813 9.8975 59.1453 8.70429 56.7702H8.7268ZM15.4133 61.9928C15.0396 61.4215 13.5267 58.8844 14.094 55.947C14.5443 53.6663 16.1067 51.6555 18.7678 49.9686C20.1536 49.8197 21.5263 49.5671 22.8742 49.2129C20.2132 52.6452 19.083 55.9605 19.5332 59.0553C19.8086 60.8538 20.5787 62.5404 21.7576 63.9271C20.6994 63.5582 19.6188 63.2523 18.5562 62.9509C17.4935 62.6495 16.4084 62.3436 15.4133 61.9928ZM36.6795 60.2699C35.8828 59.866 35.2136 59.2495 34.7463 58.4888C34.279 57.7282 34.0317 56.853 34.0319 55.9605C34.097 55.1602 34.2681 54.3721 34.5407 53.6168C34.9549 52.2313 35.3737 50.8053 35.063 49.7167C35.899 49.5136 36.7002 49.1877 37.4404 48.7496C37.4404 52.6317 39.5792 54.3006 40.4707 54.8314C40.3187 55.4659 40.0998 56.0827 39.8178 56.6712C39.1081 58.132 38.0178 59.3751 36.6615 60.2699H36.6795ZM40.6824 53.7518C39.8043 53.1085 38.2554 51.4666 38.4895 47.9804L38.6336 47.8544C39.113 47.4149 39.5323 46.9143 39.8809 46.3654C40.5022 48.6416 41.011 51.2507 40.6643 53.7518H40.6824ZM40.7949 37.7556C39.8088 35.8933 36.1707 29.8115 28.1154 24.148C28.441 23.0949 28.602 21.9979 28.5926 20.8957C28.5926 20.7878 28.5926 20.6753 28.5926 20.5718C29.2996 20.23 30.029 19.8971 30.781 19.5867C37.3414 20.3694 41.2452 23.2799 43.3659 25.5965C44.6711 26.992 45.7021 28.6202 46.4053 30.3963C45.1936 33.292 43.2551 35.8267 40.7769 37.7556H40.7949Z"
          fill="#3F4E65"
        />
        <path
          d="M17.5289 35.9868C16.0295 35.9868 14.6877 36.6436 14.1834 37.6242C14.1234 37.7437 14.1129 37.8819 14.1542 38.0091C14.1955 38.1362 14.2853 38.242 14.4041 38.3035C14.4755 38.3387 14.554 38.3572 14.6337 38.3574C14.7268 38.3577 14.8181 38.3322 14.8976 38.2837C14.9771 38.2353 15.0416 38.1658 15.084 38.083C15.4127 37.4443 16.4348 36.9944 17.5289 36.9944C18.6231 36.9944 19.6452 37.4443 19.9784 38.083C20.0084 38.1422 20.0499 38.1949 20.1003 38.238C20.1508 38.2812 20.2093 38.3139 20.2725 38.3344C20.3357 38.3549 20.4023 38.3627 20.4685 38.3574C20.5347 38.3521 20.5992 38.3338 20.6583 38.3035C20.7782 38.242 20.8689 38.1354 20.9102 38.0072C20.9516 37.879 20.9403 37.7396 20.8789 37.6197C20.3656 36.6436 19.0148 35.9868 17.5289 35.9868Z"
          fill="#3F4E65"
        />
        <path
          d="M30.9784 35.9868C29.479 35.9868 28.1327 36.6436 27.6329 37.6242C27.6019 37.6831 27.5831 37.7476 27.5775 37.8139C27.5718 37.8802 27.5795 37.947 27.6001 38.0102C27.6206 38.0735 27.6536 38.132 27.6972 38.1824C27.7407 38.2328 27.7938 38.2739 27.8535 38.3035C27.9249 38.3387 28.0035 38.3572 28.0831 38.3574C28.1762 38.3577 28.2676 38.3322 28.347 38.2837C28.4265 38.2353 28.491 38.1658 28.5334 38.083C28.8621 37.4443 29.8842 36.9944 30.9784 36.9944C32.0725 36.9944 33.0946 37.4443 33.4278 38.083C33.4579 38.1422 33.4993 38.1949 33.5498 38.238C33.6002 38.2812 33.6587 38.3139 33.7219 38.3344C33.7851 38.3549 33.8517 38.3627 33.9179 38.3574C33.9841 38.3521 34.0486 38.3338 34.1077 38.3035C34.2268 38.2411 34.3167 38.1345 34.3579 38.0066C34.3992 37.8788 34.3886 37.7398 34.3284 37.6197C33.8195 36.6436 32.4732 35.9868 30.9784 35.9868Z"
          fill="#3F4E65"
        />
        <path
          d="M63.8707 29.0774C67.1621 29.0774 70.7282 30.8767 71.3406 35.1097H67.3467C66.7794 33.4993 65.5727 32.7705 63.8707 32.7705C61.4887 32.7705 59.9218 34.5699 59.9218 37.1924C59.9218 39.5316 61.4662 41.5693 63.8707 41.5963C65.5997 41.5963 66.982 40.7327 67.4143 39.0323H71.4081C70.8183 43.5306 67.2567 45.2895 63.8707 45.2895C59.8182 45.312 55.7433 42.5905 55.7208 37.1924C55.6983 31.7944 59.8317 29.0774 63.8707 29.0774Z"
          fill="#3F4E65"
        />
        <path
          d="M77.7659 44.6959L80.2514 39.5767L74.9067 29.8513V29.2395H79.4454L82.4442 35.0874H82.5568L85.2809 29.2395H89.7071V29.8513L82.147 45.1457H77.7659V44.6959Z"
          fill="#3F4E65"
        />
        <path
          d="M94.7049 45.1455H90.729V44.5562L97.8793 29.0684H99.6128L106.817 44.5427V45.1455H102.841L98.7573 35.8474L94.7049 45.1455Z"
          fill="#3F4E65"
        />
        <path
          d="M108.667 32.8875V29.2573H120.469V32.8875H116.588V45.1456H112.571V32.8875H108.667Z"
          fill="#3F4E65"
        />
        <path
          d="M133.5 43.1347H127.237L126.305 45.1455H122.333V44.5562L129.484 29.0684H131.231L138.404 44.5562V45.1455H134.432L133.5 43.1347ZM130.348 35.4875L128.547 39.662H132.181L130.348 35.4875Z"
          fill="#3F4E65"
        />
        <path
          d="M156 45.1456H151.844V38.7579H146.941V45.1456H142.789V29.2573H146.941V35.0152H151.844V29.2573H156V45.1456Z"
          fill="#3F4E65"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_107">
          <rect width="156" height="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const SquareIcons = ({ className }: Props) => {
  return (
    <svg
      width="15"
      className={className}
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z"
        stroke="white"
      />
      <path
        d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z"
        stroke="white"
      />
      <path
        d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z"
        stroke="white"
      />
      <path
        d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z"
        stroke="white"
      />
    </svg>
  );
};

const SearchIcon = ({ className }: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5294 15.5294L12.0989 12.0928L15.5294 15.5294ZM14 7.5C14 9.22391 13.3152 10.8772 12.0962 12.0962C10.8772 13.3152 9.22391 14 7.5 14C5.77609 14 4.12279 13.3152 2.90381 12.0962C1.68482 10.8772 1 9.22391 1 7.5C1 5.77609 1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5V7.5Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
};

const CartIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="41"
      height="29"
      viewBox="0 0 41 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.6514 5.78617C40.3916 5.42327 40.043 5.24182 39.6055 5.24182H11.7559L11 3.27403C10.8086 2.62887 10.5488 2.07779 10.2207 1.6208C9.89258 1.16381 9.54395 0.841232 9.1748 0.65306C8.80566 0.464888 8.48438 0.3372 8.21094 0.269996C7.9375 0.202792 7.66406 0.169189 7.39062 0.169189H1.77148C1.41602 0.169189 1.11523 0.290157 0.869141 0.532093C0.623047 0.774028 0.5 1.08317 0.5 1.45951C0.5 1.67457 0.554688 1.8829 0.664062 2.08451C0.773438 2.28612 0.930664 2.44069 1.13574 2.54822C1.34082 2.65575 1.55273 2.70951 1.77148 2.70951H7.39062C7.5 2.70951 7.60254 2.72295 7.69824 2.74983C7.79395 2.77672 7.92383 2.89096 8.08789 3.09258C8.25195 3.29419 8.38867 3.59661 8.49805 3.99983L14.3809 20.1531C14.4355 20.3144 14.5244 20.4689 14.6475 20.6168C14.7705 20.7646 14.9141 20.8789 15.0781 20.9595C15.2422 21.0402 15.4199 21.0805 15.6113 21.0805H33.3301C33.6035 21.0805 33.8564 20.9998 34.0889 20.8385C34.3213 20.6773 34.4785 20.4756 34.5605 20.2337L40.8359 6.97569C40.9727 6.54558 40.9111 6.14908 40.6514 5.78617ZM32.4277 18.4998H16.6367L12.4531 7.82246H37.7188L32.4277 18.4998ZM30.0625 22.4798C29.1602 22.4798 28.3877 22.7957 27.7451 23.4274C27.1025 24.0591 26.7812 24.8186 26.7812 25.7057C26.7812 26.5928 27.1025 27.3522 27.7451 27.9839C28.3877 28.6156 29.1602 28.9315 30.0625 28.9315C30.9648 28.9315 31.7373 28.6156 32.3799 27.9839C33.0225 27.3522 33.3438 26.5928 33.3438 25.7057C33.3438 24.8186 33.0225 24.0591 32.3799 23.4274C31.7373 22.7957 30.9648 22.4798 30.0625 22.4798ZM18.25 22.4798C17.6484 22.4798 17.0947 22.6277 16.5889 22.9234C16.083 23.2191 15.6865 23.6089 15.3994 24.0927C15.1123 24.5766 14.9688 25.1143 14.9688 25.7057C14.9688 26.5928 15.29 27.3522 15.9326 27.9839C16.5752 28.6156 17.3477 28.9315 18.25 28.9315C19.1523 28.9315 19.9248 28.6156 20.5674 27.9839C21.21 27.3522 21.5312 26.5928 21.5312 25.7057C21.5312 25.4906 21.5107 25.2755 21.4697 25.0605C21.4287 24.8454 21.3672 24.6438 21.2852 24.4557C21.2031 24.2675 21.1006 24.086 20.9775 23.9113C20.8545 23.7366 20.7178 23.5753 20.5674 23.4274C20.417 23.2796 20.2529 23.1452 20.0752 23.0242C19.8975 22.9032 19.7129 22.8024 19.5215 22.7218C19.3301 22.6411 19.125 22.5806 18.9062 22.5403C18.6875 22.5 18.4688 22.4798 18.25 22.4798Z"
        fill="#3F4E65"
      />
    </svg>
  );
};

export { GpsIcon, LetterIcon, SultanIcon, SquareIcons, SearchIcon, CartIcon };